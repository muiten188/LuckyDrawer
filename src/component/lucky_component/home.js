import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Platform,
    AppRegistry,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Button
} from 'react-native';
import Prizes from "./prizes";
import DatePicker from 'react-native-datepicker'
import * as homeAction from '../../actions/home_action';
let fakePrizes = {};
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        title: 'Home',
    };
    getLuckyDrawer() {
        this.props.homeAction.getLuckyDrawer()
    }
    render() {
        fakePrizes = this.props.homeReducer.LuckyObject;
        return (
            <ScrollView>
                <View style={{ width: 400 }}>
                    <Text>Chon Ngay:</Text>
                    <DatePicker
                        style={{ width: 200, borderColor: "red" }}
                        date={"2017-05-26"}
                        mode="date"

                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => this.getLuckyDrawer()}
                    />
                </View>
                <View style={{ width: 400, height: 600, marginTop: 10,marginLeft:3, borderColor: '#ccc', borderWidth: 1 }}>
                    <Text style={styles.bigCell}>Xổ Số Truyền Thống</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Text style={styles.normalCell}> Đặc biệt </Text>
                            <Text style={styles.normalCell}> Giải nhất </Text>
                            <Text style={styles.normalCell}> Giải nhì </Text>
                            <Text style={styles.bigCell}> Giải ba </Text>
                            <Text style={styles.normalCell}> Giải tư </Text>
                            <Text style={styles.bigCell}> Giải năm </Text>
                            <Text style={styles.normalCell}> Giải sáu </Text>
                            <Text style={styles.normalCell}> Giải bảy </Text>
                        </View>
                        <View style={{ flex: 8 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes datas={fakePrizes.special} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes datas={fakePrizes.first} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes datas={fakePrizes.second} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes isColumn={true} datas={fakePrizes.third} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes datas={fakePrizes.fourth} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes isColumn={true} datas={fakePrizes.fifth} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes datas={fakePrizes.sixth} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes datas={fakePrizes.seventh} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    normalCell: {
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 1,
        height: 40,
        textAlign: 'center'
    },
    bigCell: {
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 1,
        height: 80,
        textAlign: 'center',
        lineHeight: 47
    },
});
function mapStateToProps(state, props) {
    return {
        homeReducer: state.homeReducer
    }
};
function mapToDispatch(dispatch) {
    return {
        homeAction: bindActionCreators(homeAction, dispatch)
    }
}

export default connect(mapStateToProps, mapToDispatch)(HomeScreen);