import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Card
        name="Annabelle"
        phone="111-111-1111"
        email="annabelle@cake.com"
        image={{
          url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          alt: "cute cat",
        }}
        favoured={false}
      />
    </div>
  );
}

export default App;
