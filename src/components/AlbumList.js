import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            albums: []
        }
    }

    //Lifecycle methods
    componentWillMount(){
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
        .then(json => {

            this.setState({albums: json});
        })
        .catch(error=>{
            console.log('Album List Fetch',error);
        })



    }
    renderAlbums(){
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title}
                album={album}
            />
        );
    }



    render (){
        return (
            <ScrollView>
                {
                    this.renderAlbums()
                }
            </ScrollView>

        )
    }
}

export default AlbumList;
