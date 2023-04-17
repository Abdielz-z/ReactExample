import cn from 'classnames'
import styles from '../styles/Card.module.css'

export const Card = ({size, image, label, title, subtitle, author, date, time}) => (
    
         <div className={cn({
            [styles.car1]: size === '1',
            [styles.car2]: size === '2',
            })}>

        <img 
            alt="Original photo of a room with roomGPT.io"
            src={image}
            className={cn({
                [styles.image1]: size === '1',
                [styles.image2]: size === '2',
                })} 
            />

        <div 
        className={cn({
            [styles.labelb1]: size === '1',
            [styles.labelb2]: size === '2',
            })}><div
        className={cn({
            [styles.label1]: size === '1',
            [styles.label2]: size === '2',
            })}
        >{label}</div>      
        </div>
        
        <h2
        className={cn({
            [styles.title1]: size === '1',
            [styles.title2]: size === '2',
            })}
        > {title} </h2>
        
        <p 
        className={cn({
            [styles.subt1]: size === '1',
            [styles.subt2]: size === '2',
            })}
        >{subtitle}</p>  

        <p
        className={cn({
            [styles.author1]: size === '1',
            [styles.author2]: size === '2',
            })}> <a><u>{author}</u></a></p>
        
        <p className={cn({
            [styles.date1]: size === '1',
            [styles.date2]: size === '2',
            })}
            >{date}</p>
        
        <p className={cn({
            [styles.time1]: size === '1',
            [styles.time2]: size === '2',
            })}
            >{time}</p> 
        
        </div>
)