//este archivo lo ejecuta jest automáticamente al inicio del test
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//http://airbnb.io/enzyme
Enzyme.configure({ adapter: new Adapter() });