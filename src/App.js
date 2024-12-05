import Avatar from './components/avatar'; 

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Sarah Smith',
          imageId: 'YfeOqp2'
        }}        
      /> 
      <Avatar
        size={200}
        person={{ 
          name: 'Sarah Smith',
          imageId: 'YfeOqp2'
        }}        
      /> 
      <Avatar
        size={300}
        person={{ 
          name: 'Sarah Smith',
          imageId: 'YfeOqp2'
        }}        
      /> 
    </Card>
  );
}
