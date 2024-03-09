const LoginForm = () => {
  return (
    <div>
      <label htmlFor="id">ID: </label>
      <input type="id" placeholder="ID를 입력하세요." />

      <label htmlFor="password">PW: </label>
      <input type="password" placeholder="PW를 입력하세요" />

      <button>로그인</button>
      <button>회원가입</button>
    </div>
  );
};

export default LoginForm;