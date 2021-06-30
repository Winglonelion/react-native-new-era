/**
 * handle behavior with screen render frames
 */

import { InteractionManager } from 'react-native';

/* Returns a promise that will resolve on the next AnimationFrame */
export function nextFrame(): Promise<void> {
  return new Promise(resolve => {
    requestAnimationFrame(() => {
      resolve();
    });
  });
}

/* Returns a promise that will resolve on the next AnimationFrame */
export function afterInteract(deadLine = 1000): Promise<void> {
  return new Promise(resolve => {
    const handler = InteractionManager.createInteractionHandle();
    const timeout = setTimeout(() => {
      resolve();
      InteractionManager.clearInteractionHandle(handler);
    }, deadLine);

    InteractionManager.runAfterInteractions(() => {
      clearTimeout(timeout);
      InteractionManager.clearInteractionHandle(handler);
      resolve();
    });
  });
}

/* Applies `fn` to each element of `collection`, iterating once per frame */
export function mapInFrames(collection: unknown[], fn: Function) {
  let queue = Promise.resolve();
  const values = [] as unknown[];
  collection.forEach(item => {
    queue = queue.then(() =>
      nextFrame().then(() => {
        values.push(fn(item));
      }),
    );
  });
  return queue.then(() => values);
}

/**
 * waiting x frames before the Promise will resolve
 * @param  {Number}    frame - the number of frames the Promise waits before resolving
 * @param  {...} args - optional values that would be the params of the Promises resolve
 * @return {Promise} which will resolve after the waiting frames
 */
export const waitFrames = (frame = 1) =>
  new Promise(resolve => {
    let i = 0;
    const count = () => {
      if (++i >= frame) {
        return resolve(frame);
      }
      return requestAnimationFrame(count);
    };
    requestAnimationFrame(count);
  });

/**
 * resolve when fn returns a truthy value.
 * @param  {Function}  fn   a function that will be called every frame to check for changes
 * @param  {...[type]} args - optional values that would be the params of the Promises resolve
 * @return {Promise} which will resolve after the waiting frames
 */
export const when = (
  fn: (...args: Parameters<any>) => boolean,
  ...args: Parameters<any>
): unknown =>
  nextFrame().then(() => {
    const result = fn(...args);
    if (result) {
      return args && args.length > 1 ? args : result;
    }
    return when(fn, ...args);
  });

/**
 * until fn returns a truthy value do not resolve.
 * @param  {Function}  fn   a function that will be called every frame to check for changes
 * @param  {...[type]} args - optional values that would be the params of the Promises resolve
 * @return {Promise} which will resolve after the waiting frames
 */
export const until = (
  fn: (...args: Parameters<any>) => boolean,
  ...args: Parameters<any>
): unknown =>
  nextFrame().then(() => {
    const result = fn(...args);
    if (result) {
      return until(fn, ...args);
    }

    return args && args.length > 1 ? args : result;
  });

/**
 * create an animationframe loop that calls a function (callback) in every frame
 * @param  {Function} cb - gets called in every frame - for rendering mostly
 * @return {Function}  a function which cancels the initialed loop by calling it
 */
export const loop = (cb: Function) => {
  if (typeof cb !== 'function') {
    throw new Error('callback needs to be a function');
  }
  let f = true;
  const frame = () => {
    if (f) {
      cb();
      requestAnimationFrame(frame);
    }
  };
  requestAnimationFrame(frame);
  return () => {
    f = false;
  };
};

/**
 * create a throttled animationframe loop that calls a function (callback) in every specified
 * @param  {Function} cb        gets called in every specified frame
 * @param  {Number}   throttle in wich interval cb is called
 * @return {Function}  a function which cancels the initialed loop by calling it
 */
export const throttleFrames = (cb: Function, throttle = 0) => {
  if (typeof cb !== 'function') {
    throw new Error('callback needs to be a function');
  }
  let f = true;
  let i = 0;
  const frame = () => {
    ++i;
    if (f) {
      if (throttle && i % throttle === 0) {
        cb();
      }
      requestAnimationFrame(frame);
    }
  };
  requestAnimationFrame(frame);
  return () => {
    f = false;
  };
};

/**
 * delays the call to nextFrame with setTimeout
 * @param  {Number}    ms    delay in ms
 * @param  {...} args - optional values that would be the params of the Promises resolve
 * @return {Promise} which will resolve after the delayed animationframe
 */
export const delay = (ms = 0): Promise<void> =>
  new Promise(resolve =>
    setTimeout(() => nextFrame().then(() => resolve()), ms),
  );

export { mapInFrames as frameSequence };
export { mapInFrames as sequence };
export { waitFrames as wait };
export { loop as nextFrames };
export { loop as onEnterFrame };
export { throttleFrames as throttle };
export { nextFrame as frame };

export default nextFrame;
