const AboutForm = () => (
  <form>
    <label htmlFor="name">Name</label>
    <input id="name" />
    <br />

    <label htmlFor="email">Email</label>
    <input id="email" />
    <br />

    <label htmlFor="favorite-golden-girl">Favorite Golden Girl</label>
    <select id="favorite-golden-girl">
      <option value="blanche_devereaux">Blanche Devereaux</option>
      <option value="rose_nylund">Rose Nylund</option>
      <option value="sophia_petrillo">Sophia Petrillo</option>
      <option value="dorothy_zbornak">Dorothy Zbornak</option>
    </select>
    <br />
  </form>
);

export default AboutForm;
