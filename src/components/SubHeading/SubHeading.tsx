import { images } from "../../constants";

interface ISubHeading {
  title: string
}

const SubHeading: React.FC<ISubHeading> = ({title}) => (
  <div style={{marginBottom: '1rem'}} >
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img"/>
  </div>
);

export default SubHeading;
