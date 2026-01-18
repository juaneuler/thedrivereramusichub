interface WhyContentProps {
  explicacion: string;
}

const WhyContent = ({ explicacion }: WhyContentProps) => (
  <div className="why-content">
    <p className="why-text">{explicacion}</p>
  </div>
);

export default WhyContent;