
import {Layout, Model, FlexLayout, Actions} from 'flexlayout-react';
import 'flexlayout-react/style/light.css';  
import {Container} from "@/components/Container";
import {Button} from "@/components/Button";

var json = {
  global: {},
  borders: [],
  layout: {
      type: "row",
      weight: 100,
      children: [
          {
              type: "tabset",
              
              weight: 50,
              children: [
                  {
                      type: "tab",
                      name: "One",
                      component: "button",
                  },
                  {
                    type: "tab",
                    name: "Two wefwfhewui Running",
                    component: "button",
                }
              ]
          },

          {
            type: "tabset",
            
            weight: 50,
            children: [
                {
                    type: "tab",
                    name: "One",
                    component: "button",
                },
                {
                  type: "tab",
                  name: "Two wefwfhewui Running",
                  component: "button",
              }
            ]
        },
          
      ]
  }
};

const model = Model.fromJson(json);


export default function Home() {


  const factory = (node: TabNode) => {
    var component = node.getComponent();
    if (component === "button") {
      return <Container className={'bg-red w-12 h-[500px]'}> </Container>;
    }
  }

  const addNewTab = () => {
    model.doAction(Actions.addNode( { name: '1', component: 'component', type: "tab" }, '1', 3, -1 ) )
  }
  
    return (
<div>
<Button onClick={() => addNewTab()}>Add new Tab</Button>
    <Container className={`relative !pt-6 xl:pt-24  min-h-screen z-50 bg-white bg-red`}>
              
             <Layout
      model={model}
      factory={factory}
      save={(e) => console.log(e)} />

      </Container>

</div>

  );
}
