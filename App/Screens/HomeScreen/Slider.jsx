import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';

export default function Slider() {

    const [slider, setSlider] = useState([]);

    useEffect(() => {
        getSlider();
    }, []);

    const getSlider = () => {
        GlobalApi.getSlider().then(resp => {
            if (resp?.sliders) {
                setSlider(resp.sliders);
            } else {
                console.error("Error fetching sliders:", resp);
            }
        }).catch(error => {
            console.error("Error fetching sliders:", error);
        });
    };

    return (
        <View>
            <Heading text={'Offers For You'} />
            <FlatList
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{marginRight:20}}>
                        <Image
                            source={{ uri:item?.image.url }}
                            style={styles.sliderImage}
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sliderImage: {
        width: 270,
        height: 150,
        borderRadius: 20,
        resizeMode: 'contain'
    }
});
