import React from 'react'
import NewPaper from './components/NewPaper'

const News = () => {

    const items = [
        {
            title: 'Titulo',
            img: 'https://salcedocatering.com/wp-content/uploads/2019/06/Coffee-Break-1024x675.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore perferendis, quasi provident consequuntur adipisci molestiae excepturi? Itaque ea, voluptates numquam cumque ducimus magnam ullam unde ab qui iusto eius?'
        },
        {
            title: 'Titulo',
            img: 'https://salcedocatering.com/wp-content/uploads/2019/06/Coffee-Break-1024x675.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore perferendis, quasi provident consequuntur adipisci molestiae excepturi? Itaque ea, voluptates numquam cumque ducimus magnam ullam unde ab qui iusto eius?'
        },
        {
            title: 'Titulo',
            img: 'https://salcedocatering.com/wp-content/uploads/2019/06/Coffee-Break-1024x675.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore perferendis, quasi provident consequuntur adipisci molestiae excepturi? Itaque ea, voluptates numquam cumque ducimus magnam ullam unde ab qui iusto eius?'
        }
    ]

    return (
        <div className="newsContainer">
            {items.map(({ title, description, img }) =>
                <NewPaper title={title} description={description} img={img} />
            )}
        </div>
    )
}
export default News