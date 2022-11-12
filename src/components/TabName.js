import '../App.css';

const TabName = ({id, title, activeTab, setActiveTab}) => {
    const handleClick = () => {
        setActiveTab(id)
    }
  return (
    <>
        <p className={activeTab === id ? 'tab active': 'tab'} onClick={handleClick} >
            {title}
        </p>
    </>
    
  );
}

export default TabName;
