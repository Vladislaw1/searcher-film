import s from './ProgressBar.module.scss'
import {FC} from "react";

interface IProps {
    progress: number
}

export const ProgressBar: FC<IProps> = ({progress}) => {
    return <div className={s.progressBar}>
        <div className={s.bar}>
            <div style={{width: `${progress}%`}} className={s.bar_fill}></div>
        </div>
    </div>
}