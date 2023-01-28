import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BasicLayout(props) {
  const { children, className } = props;
  return (
    <div>
      <Header />
        <div className="content bg">{children}</div>
      <Footer />
    </div>
  );
}