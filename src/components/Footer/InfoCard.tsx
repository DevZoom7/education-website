interface Props {
   iconSrc: string;
   title: string;
   description: string;
}

export default function InfoCard({ iconSrc, title, description }: Props) {
   return (
      <div className="footer__info-card">
         <img className="icon" src={iconSrc} alt="feature icon" />
         <p className="footer__title">{title}</p>
         <p className="footer__description">{description}</p>
      </div>
   );
}
