const SignupForm = () => {
  return (
    <form>
        <label htmlFor="id">ID: </label>
        <input type="text" />

        <label htmlFor="password">PW: </label>
        <input type="password" />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignupForm;