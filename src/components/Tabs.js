import '../App.css';
import TabName from './TabName.js';
import TabContent from './TabContent.js'
import {useState} from 'react'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('standard-line-tab')
    const [selectedButton, setSelectedButton] = useState(false)

    const buttons = [
      {
 
        cpu: 1,
        gb: '2 GB',
      },
      {
 
        cpu: 1,
        gb: '3 GB',
      },
      {
 
        cpu: 1,
        gb: '4 GB',
      },
      {
 
        cpu: 2,
        gb: '1 GB',
      },
      {
 
        cpu: 2,
        gb: '2 GB',
      },
      {
 
        cpu: 2,
        gb: '3 GB',
      },
      {
 
        cpu: 2,
        gb: '4 GB',
      },
      {
 
        cpu: 2,
        gb: '6 GB',
      },
      {
 
        cpu: 2,
        gb: '8 GB',
      },
      {
 
        cpu: 4,
        gb: '16 GB',
      },
      {
 
        cpu: 4,
        gb: '24 GB',
      },
      {
 
        cpu: 10,
        gb: '10 GB',
      },
    ]

    const handleSelectedButton = (i) => {
      setSelectedButton(i)
    }
  return (
    <div className='tabs'>
      <div className='tabs-names'>
        <TabName 
        id='standard-line-tab'
        title='Standard Line'
        activeTab={activeTab}
        setActiveTab={setActiveTab}/>

        <TabName 
        id='cpu-line-tab'
        title='CPU Line'
        activeTab={activeTab}
        setActiveTab={setActiveTab}/>

        <TabName 
        id='memory-line-id'
        title='Memory Line'
        activeTab={activeTab}
        setActiveTab={setActiveTab}/>

        <TabName 
        id='pr-configuration-tab'
        title='Производительная конфигурация'
        activeTab={activeTab}
        setActiveTab={setActiveTab}/>

        <TabName 
        id='my-configuration-tab'
        title='Моя конфигурация'
        activeTab={activeTab}
        setActiveTab={setActiveTab}/>
      </div>

      <div className='tabs-content'>
        <TabContent id='standard-line-tab' activeTab={activeTab}>
            <div className='standard-line-content'>
              {buttons.map((el, i) => {
                return <button 
                key={i}
                onClick={() => handleSelectedButton(i)}
                className={selectedButton === i ? 'standard-line-block selected' : 'standard-line-block'}>
                  <b>{el.cpu}</b> CPU / <b>{el.gb}</b> RAM
                  </button>
              })}

            </div>


        </TabContent>

        <TabContent id='cpu-line-tab' activeTab={activeTab}>
            <p>Here is CPU Line</p>
        </TabContent>

        <TabContent id='memory-line-id' activeTab={activeTab}>
            <p>Here is Memory Line</p>
        </TabContent>

        <TabContent id='pr-configuration-tab' activeTab={activeTab}>
            <p>Here is Pr configuration Line</p>
        </TabContent>
        
        <TabContent id='my-configuration-tab' activeTab={activeTab}>
            <p>Here is my configuration Line</p>
        </TabContent>
      </div>
    </div>
  );
}

export default Tabs;
