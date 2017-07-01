import _ from 'lodash';
import React, {Component} from 'react';
import {Card, CardSection, Button, Input} from './common';
import {View, Text, TouchableWithoutFeedback, Modal, ListView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {carAdd, carCreate, carFetch} from '../actions';
import reducers from '../reducers';
import ListItem from './ListItem';


class CarList extends Component{

    state = {showModal:false};

    componentWillMount(){
        this.props.carFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({ cars }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(cars);
    }

    renderRow(car){
        return <ListItem car={car}/>
    }

    onAddPress(){
        this.setState({showModal: true})
    }

    onSubmitPress(){
        const {year, make, model} = this.props;
        this.props.carCreate({year, make, model});
        this.setState({showModal:false})
    }

    onCancelPress(){
        this.setState({showModal:false});
    }

    render(){
        const {containerStyle, textStyle, cardSectionStyle}= styles

        return(


            <Card style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />

                <Modal
                    visible={this.state.showModal}
                    transparent
                    animationType="slide"
                    onRequestClose={()=>{}}
                >
                    <View style={containerStyle}>
                        <CardSection style = {cardSectionStyle}>
                           <Input
                                label='Year:'
                                placeholder = '1967'
                                value={this.props.year}
                                onChangeText = { value => this.props.carAdd({prop:'year', value})}
                            />
                        </CardSection>

                        <CardSection style={cardSectionStyle}>
                            <Input
                                label='Make:'
                                placeholder='Ford'
                                value={this.props.make}
                                onChangeText={value => this.props.carAdd({prop:'make', value})}
                            />
                        </CardSection>

                        <CardSection style={cardSectionStyle}>
                            <Input
                                label='Model:'
                                placeholder='Mustang'
                                value={this.props.model}
                                onChangeText={value => this.props.carAdd({prop:'model', value})}
                            />
                        </CardSection>

                        <CardSection>
                            <Button onPress={this.onSubmitPress.bind(this)}>Submit</Button>
                        </CardSection>

                          <CardSection>
                            <Button onPress={this.onCancelPress.bind(this)}>Cancel</Button>
                        </CardSection>

                    </View>
                </Modal>

                <TouchableWithoutFeedback onPress={this.onAddPress.bind(this)}>
                    <View>
                        <CardSection>
                            <Icon name="add-circle-outline" size={50} color="navy" />
                        </CardSection>
                    </View>
                </TouchableWithoutFeedback>
            </Card>
        )
    }
}

const mapStateToProps = (state) =>{
    const { year, make, model } = state.carInfo;
    const cars = _.map(state.carInfo, (val, uid) => {
      return { ...val, uid };
    });

    return { year, make, model, cars };
};

const styles = {

    cardSectionStyle: {
        justifyContent: 'center'
    },

    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },

    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign:'center',
        lineHeight: 40
    },
}

export default connect(mapStateToProps, {carAdd, carCreate, carFetch}) (CarList);
