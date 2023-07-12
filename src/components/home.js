const firstText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et congue ipsum. Aenean nec turpis ut tortor imperdiet imperdiet. Phasellus ac enim quam. Sed elementum ex ligula, et varius erat fringilla id. Etiam eros enim, commodo nec hendrerit sit amet, condimentum sit amet lacus. Nulla ante orci, mollis ac eleifend sit amet, congue non purus. Nunc vulputate in est id pharetra. Phasellus ultrices, libero consectetur blandit dictum, purus enim gravida tellus, id ullamcorper elit quam molestie dui. In fringilla sit amet sapien a sagittis. Donec pellentesque feugiat semper. Proin eget finibus erat. Integer id varius diam. Duis eget mi eu elit aliquet porta at ut eros. Pellentesque nec maximus mauris. Vivamus rhoncus augue sed neque convallis congue eu in turpis.';
const secondText = 'Nullam interdum consequat condimentum. Nam varius tristique tellus, in eleifend nisi. Curabitur tellus leo, finibus at consectetur ac, dictum eget diam. Proin at tortor leo. Sed posuere turpis felis, at pretium urna consectetur non. Ut cursus porta vehicula. Proin iaculis dolor a diam blandit molestie. Fusce interdum accumsan diam, sed eleifend elit rutrum id. Curabitur interdum diam ac massa eleifend, id aliquet sapien vulputate. Vestibulum augue mi, auctor et erat ac, dictum feugiat orci.';

const Home = () => (
  <div className="home container">
    <h2 className="homeTitle">Welcome to our page!</h2>
    <p className="paragraph">{firstText}</p>
    <p className="paragraph">{secondText}</p>
  </div>
);

export default Home;
