import React, { PureComponent, ReactElement, ReactNode } from 'react';
import {
  View,
  LayoutChangeEvent,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import PropTypes from 'prop-types';
import * as shape from 'd3-shape';
import Svg, { G, Path } from 'react-native-svg';
import Platform from 'utils/platform';
import CommonStyles from 'theme/CommonStyles';

interface PropTypes {
  data: {
    svg?: object;
    key: any;
    value?: number;
    arc?: object;
    onPress?: (event: GestureResponderEvent) => void;
  }[];
  dataPoints?: any;
  innerRadius?: string | number;
  outerRadius?: string | number;
  labelRadius?: string | number;
  padAngle?: number;
  animate?: boolean;
  animationDuration?: number;
  style?: ViewStyle;
  sort?: (a: any, b: any) => number;
  valueAccessor?: any;
  children?: ReactElement | ReactNode;
  startAngle?: number;
  endAngle?: number;
}

interface StateTypes {}

class PieChart extends PureComponent<PropTypes, StateTypes> {
  state = {
    height: 0,
    width: 0,
  };

  _onLayout = (event: LayoutChangeEvent) => {
    const {
      nativeEvent: {
        layout: { height, width },
      },
    } = event;

    this.setState({ height, width });
  };

  _calculateRadius(arg: string | number, max: number, defaultVal: number) {
    if (typeof arg === 'string') {
      return (Number.parseFloat(arg.split('%')[0]) / 100) * max;
    } else if (arg) {
      return arg;
    } else {
      return defaultVal;
    }
  }

  render() {
    const {
      data,
      dataPoints,
      innerRadius = PieChart.defaultProps.innerRadius,
      outerRadius = PieChart.defaultProps.outerRadius,
      // labelRadius = PieChart.defaultProps.labelRadius,
      padAngle,
      // animate,
      // animationDuration,
      style,
      sort = PieChart.defaultProps.sort,
      valueAccessor,
      // children,
      startAngle = PieChart.defaultProps.startAngle,
      endAngle = PieChart.defaultProps.endAngle,
    } = this.props;

    const { height, width } = this.state;

    if (!data && dataPoints) {
      throw `"dataPoints" have been renamed to "data" to better reflect the fact that it's an array of objects`;
    }

    if (data.length === 0) {
      return <View style={style} />;
    }

    const maxRadius = Math.min(width, height) / 2;

    if (Math.min(...data.map(obj => valueAccessor({ item: obj }))) < 0) {
      console.error(
        "don't pass negative numbers to pie-chart, it makes no sense!",
      );
    }

    const _outerRadius = this._calculateRadius(
      outerRadius,
      maxRadius,
      maxRadius,
    );
    const _innerRadius = this._calculateRadius(innerRadius, maxRadius, 0);
    // const _labelRadius = this._calculateRadius(
    //   labelRadius,
    //   maxRadius,
    //   _outerRadius,
    // );

    if (outerRadius > 0 && _innerRadius >= outerRadius) {
      console.warn('innerRadius is equal to or greater than outerRadius');
    }

    const arcs = data.map(item => {
      const arc: any = shape
        .arc()
        .outerRadius(_outerRadius)
        .innerRadius(_innerRadius)
        .padAngle(padAngle); // Angle between sections

      item.arc &&
        Object.entries(item.arc).forEach(([key, value]) => {
          if (typeof arc[key] === 'function') {
            if (typeof value === 'string') {
              arc[key](
                (Number.parseFloat(value.split('%')[0]) / 100) * _outerRadius,
              );
            } else {
              arc[key](value);
            }
          }
        });

      return arc;
    });

    // const labelArcs = data.map((item, index) => {
    //   if (labelRadius) {
    //     return shape
    //       .arc()
    //       .outerRadius(_labelRadius)
    //       .innerRadius(_labelRadius)
    //       .padAngle(padAngle);
    //   }
    //   return arcs[index];
    // });

    const pieSlices = shape
      .pie()
      .value(d => valueAccessor({ item: d }))
      .sort(sort)
      .startAngle(startAngle)
      .endAngle(endAngle)(data as never);

    // const slices = pieSlices.map((slice, index) => ({
    //   ...slice,
    //   pieCentroid: arcs[index].centroid(slice),
    //   labelCentroid: labelArcs[index].centroid(slice),
    // }));

    // const extraProps = {
    //   width,
    //   height,
    //   data,
    //   slices,
    // };

    return (
      <View pointerEvents={'box-none'} style={style}>
        <View
          pointerEvents={'box-none'}
          style={CommonStyles.flex1}
          onLayout={this._onLayout}>
          {height > 0 && width > 0 && (
            <Svg
              pointerEvents={Platform.isAndroid ? 'box-none' : 'auto'}
              style={{ height, width }}>
              {/* center the progress circle*/}
              <G x={width / 2} y={height / 2}>
                {/* {React.Children.map(children, child => {
                  if (child && child.props.belowChart) {
                    return React.cloneElement(child, extraProps);
                  }
                  return null;
                })} */}
                {pieSlices.map((slice, index) => {
                  const { key, onPress, svg } = data[index];
                  return (
                    <Path
                      key={key}
                      onPress={onPress}
                      {...svg}
                      d={arcs[index](slice)}
                      // animate={animate}
                      // animationDuration={animationDuration}
                    />
                  );
                })}
                {/* {React.Children.map(children, child => {
                  if (child && !child.props.belowChart) {
                    return React.cloneElement(child, extraProps);
                  }
                  return null;
                })} */}
              </G>
            </Svg>
          )}
        </View>
      </View>
    );
  }

  static defaultProps = {
    width: 100,
    height: 100,
    padAngle: 0.05,
    startAngle: 0,
    endAngle: Math.PI * 2,
    outerRadius: '100%',
    labelRadius: '50%',
    valueAccessor: ({ item }: { item: any }) => item.value,
    innerRadius: '50%',
    sort: (a: any, b: any) => b.value - a.value,
  };
}

export default PieChart;
