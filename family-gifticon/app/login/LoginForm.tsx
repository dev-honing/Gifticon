import Link from 'next/link'

const LoginForm = () => {
  return (
    <div>
      <label htmlFor="id">ID: </label>
      <input type="id" placeholder="ID를 입력하세요." />

      <label htmlFor="password">PW: </label>
      <input type="password" placeholder="PW를 입력하세요" />

      <button>로그인</button>
      <Link href="/signup">
        <button>회원가입</button>
      </Link>
    </div>
  );
};

export default LoginForm;