import React from 'react'
import { fetchImages } from '../redux/actions/images'
import { useDispatch, useSelector } from 'react-redux'
import Image from './Image'
import Modal from './Modal'
import axios from 'axios'

const style = {
    display: 'flex',
    flexWrap: 'wrap'
}

function Gallery() {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false)
    const [oneImage, setOneImage] = React.useState(null)

    React.useEffect(() => {
        dispatch(fetchImages())
    }, [dispatch])

    const images = useSelector(({ images }) => images.items)

    const handleClick = (id) => {

        axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then(({ data }) => setOneImage(data))
            .finally(() => {
                setOpen(true)
            })
    }

    const onClose = () => {
        setOpen(false)
    }

    const addComment = (text) => {
        let data = {
            text: text,
            date: 123231231
        }
        
        axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${oneImage.id}/comments`, {...data, name: "Mansur", comment: "Text Text"})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div style={style}>
            {
                images.map((item) => {
                    return (
                        <Image
                            key={item.id}
                            url={item.url}
                            onClick={handleClick}
                            id={item.id}
                        />
                    )
                }

                )
            }
            {open &&
                <Modal
                    data={oneImage}
                    onClose={onClose}
                    addComment={addComment}
                />

            }
        </div>
    )
}

export default Gallery
