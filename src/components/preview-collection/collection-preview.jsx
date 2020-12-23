import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
// import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
    console.log(title);
    return(
    <div className='collection-preview'>
        <h1 className='title'>{ title['title'] }</h1>
        <div className='preview'>
            {
                title['items']
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
);}
export default CollectionPreview;