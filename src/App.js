import Avatar from './components/avatar'; 

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Home() {
  return (    
    <Card>      

      {/*
      
      Simple Avatar component that takes in props. Here, we are telling what ID or "image" to load from imgur.     
      
       
      */}

      <Avatar
        size={100}
        person={{ 
          name: 'Sarah Smith',
          imageId: 'HXY3V2U'
        }}        
      /> 
      <Avatar
        size={125}
        person={{ 
          name: 'Sarah Smith',
          imageId: 'M1cuHHF'
        }}        
      /> 
      <Avatar
        size={150}
        person={{ 
          name: 'Sarah Smith',
          imageId: 'Iiv6PZb'
        }}        
      /> 
    </Card>
  );
}
