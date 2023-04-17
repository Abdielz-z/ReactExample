import cn from 'classnames'
import styles from '../styles/Card.module.css'
import { Card } from '../components/Card'


export const Row = ({size}) => (
    
        <div className={styles.row2}>
            <table className={styles.row}>
            <td><Card size = "2" image = 'https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' label = "label" title = "Write sdsd" subtitle = "author:" author = "1asddsadadsad" date = "* adsda1" time = "1asdasddasd"/></td>
            <td><Card size = "2" image = 'https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' label = "label" title = "Write sdsd" subtitle = "author:" author = "1asddsadadsad" date = "* adsda1" time = "1asdasddasd"/></td>
            <td><Card size = "2" image = 'https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' label = "label" title = "Write sdsd" subtitle = "author:" author = "1asddsadadsad" date = "* adsda1" time = "1asdasddasd"/></td>
            </table>

        </div>
)