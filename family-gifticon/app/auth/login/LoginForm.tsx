// app/auth/login/LoginForm.tsx

const LoginForm = () => {
  return (
    <div>
      <label htmlFor="id">ID: </label>
      <input type="id" placeholder="ID를 입력하세요." /><br />

      <label htmlFor="password">PW: </label>
      <input type="password" placeholder="PW를 입력하세요" /><br />

      <button>로그인</button>
    </div>
  );
};

export default LoginForm;