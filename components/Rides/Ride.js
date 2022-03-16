import Image from 'next/dist/client/image';
import styles from './Rides.module.css';
import mapImg from '../../public/assets/map.png';
import { calcDistance } from '../../utils/CalcDist';

export const Ride = ( props ) => {

    const { 
        id,
        origin_station_code,
        station_path,
        date,
        state,
        city,
        station_code,
        
    } = props;

    const { map, ride, ride_d, val, badges, badge } = styles;
    const dt = new Date(date);
    var d = new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds(), dt.getMilliseconds()));
    //console.log(d.getTime());
  //  console.log(typeof city);
   
    const _date = d.toDateString().split(" ");

    const _time = d.toTimeString().substring(0, 5)
    const txtDate =  `${ _date[2] }th ${ _date[1] } ${ _date[3] } ${ _time }` ;

    const distance = calcDistance( station_path,  station_code );

    return (
        <div className='container'>
            <div className = { ride }>
                <div className = { map }>
                    <Image src = { mapImg } alt = "map"/>
                     {/* <img src = { map_url } alt = "map"/> */}
                </div>

                <div className = { ride_d }>
                    <p>
                        Ride Id : {" "}
                        <span 
                        className = { val }>
                            { id }
                        </span>
                    </p>

                    <p>
                        Origin Station : {" "}
                        <span 
                        className = { val }>
                            { origin_station_code }
                        </span>
                    </p>

                    <p>
                        station_path : {" "}
                        <span 
                        className = { val }>
                            { `[${ station_path.join(", ") }]` }
                        </span>
                    </p>

                    <p>
                        Date: {" "}
                        <span 
                        className = { val }>
                            { txtDate }
                        </span>
                    </p>
                    
                    <p>
                        Distance: {" "}
                        <span 
                        className = { val }>
                            { distance }
                        </span>
                    </p>
                </div>


                <div className = { badges }>
                    <span className = { badge } >{ city }</span>
                    <span className = { badge } >{ state }</span>
                </div>
            </div>
        </div>
    );
};