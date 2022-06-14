import { login } from "api/user.api";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setIsAdmin, setIsAuth } from "store/action-creators/user-actions-creator";
import { ROUTES } from "utils/consts";

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await login(data.password);
      localStorage.setItem('token', res.token);
      dispatch(setIsAdmin(true));

      router.push(ROUTES.homePath);
    } catch (e) {
      setError('submit', {
        type: "serverError",
        message: e,
      });
    }
  });

  return (
    <div className="auth-change-page">
      <form className="auth-change-form" onSubmit={onSubmit}>
        <div className="auth-change__title">Авторизация</div>

        <label className="auth-change__pass-label">Пароль</label>
        <input
          className="auth-change__pass-input"
          type="password"
          placeholder="1234"
          autoComplete="on"
          {...register('password', { required: true, minLength: 4 })}
        />
        {errors.password?.type === 'required' && <div className="auth-change__err-mess">Пароль - обязательное поле</div>}
        {errors.password?.type === 'minLength' && <div className="auth-change__err-mess">Пароль должен содержать не менее 4 символов</div>}

        <div className="auth-change__form-nav">
          <div className="auth-change__question">
            {/* <div className="question__label">Забыли пароль?</div>
            <Link href={ROUTES.changePassPath}>
              <a className="to-login-page">Сменить пароль</a>
            </Link> */}
          </div>

          <button className="auth-change__btn" type="submit">Войти</button>
        </div>
        {errors.submit?.type === "serverError" && <div className="auth-change__err-mess">{errors.submit.message}</div>}
      </form>
    </div>
  )
}
