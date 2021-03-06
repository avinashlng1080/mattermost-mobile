// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import CompassIcon from '@components/compass_icon';
import ConditionalTouchable from '@components/conditional_touchable';

export default class CustomListRow extends React.PureComponent {
    static propTypes = {
        onPress: PropTypes.func,
        enabled: PropTypes.bool,
        selectable: PropTypes.bool,
        selected: PropTypes.bool,
        children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf([PropTypes.node])]),
        testID: PropTypes.string,
    };

    static defaultProps = {
        enabled: true,
    };

    render() {
        return (
            <ConditionalTouchable
                touchable={Boolean(this.props.enabled && this.props.onPress)}
                onPress={this.props.onPress}
                style={style.touchable}
                testID={this.props.testID}
            >
                <View style={style.container}>
                    {this.props.selectable &&
                        <View style={style.selectorContainer}>
                            <View style={[style.selector, (this.props.selected && style.selectorFilled), (!this.props.enabled && style.selectorDisabled)]}>
                                {this.props.selected &&
                                    <CompassIcon
                                        name='check'
                                        size={24}
                                        color='#fff'
                                    />
                                }
                            </View>
                        </View>
                    }
                    <View style={style.children}>
                        {this.props.children}
                    </View>
                </View>
            </ConditionalTouchable>
        );
    }
}

const style = StyleSheet.create({
    touchable: {
        flex: 1,
        overflow: 'hidden',
    },
    container: {
        flexDirection: 'row',
        height: 65,
        flex: 1,
        alignItems: 'center',
    },
    children: {
        flex: 1,
        flexDirection: 'row',
    },
    selector: {
        height: 28,
        width: 28,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#888',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectorContainer: {
        height: 50,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectorDisabled: {
        backgroundColor: '#888',
    },
    selectorFilled: {
        backgroundColor: '#166DE0',
        borderWidth: 0,
    },
});
