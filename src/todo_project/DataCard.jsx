import { MdCheck, MdDeleteForever } from 'react-icons/md';

const DataCard = ({task, deleteData}) => {
  return (
    <>
                <section>
                <ul >
                    {
                        task.map((currElem, index)=>{
                            return <li key={index}   className='added-item' >
                                <span id='added-name'>{currElem}</span>
                                <button id='check-btn' ><MdCheck/></button>
                                <button id='delete-btn'onClick={()=>deleteData(currElem)}><MdDeleteForever/></button>
                            </li>
                        })
                    }
                </ul>
            </section>
    </>
  )
}

export default DataCard