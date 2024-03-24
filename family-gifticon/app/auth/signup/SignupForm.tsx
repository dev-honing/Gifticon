// app/auth/signup/SignupForm.tsx

const SignupForm = () => {
  return (
    <form>
        <label htmlFor="id">ID: </label>
        <input type="text" /><br />

        <label htmlFor="password">PW: </label>
        <input type="password" /><br />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignupForm;