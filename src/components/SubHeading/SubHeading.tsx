import { images } from "../../constants";

interface ISubHeading {
  title: string
}

const SubHeading: React.FC<ISubHeading> = ({title}) => (
  <div style={{margin: '1rem 0'}} >
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img"/>
  </div>
);

export default SubHeading;
