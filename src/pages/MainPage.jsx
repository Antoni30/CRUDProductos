import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import userAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const { authLogin, registerR,login } = userAuth();
  const navigate = useNavigate();
  const { register: loginRegister, handleSubmit: handleLoginSubmit } =
    useForm();
  const { register: registerRegister, handleSubmit: handleRegisterSubmit } =
    useForm();

  const [email, setEmail] = useState("");
  const handleLogin = handleLoginSubmit((data) => {
    authLogin(data);
  });

  const handleRegister = handleRegisterSubmit((value) => {
    registerR(value);
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    if(login) navigate('/products');
  }, [login]);

  return (
    <div className="flex">
      {/* INICIAR SESIÓN */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Sistema de Inventario de Bodega
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Sistema de inventario de bodega utilizando tecnologías de desarrollo
            web front-end y back-end.
          </p>

          <form
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            onSubmit={handleLogin}
          >
            <p className="text-center text-lg font-medium">INICIA SESIÓN</p>

            <div>
              <label htmlFor="email" className="sr-only">
                Usuario
              </label>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Ingrese su correo"
                  onChange={handleEmailChange}
                  {...loginRegister("email", { require: true })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>

              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Ingrese su contraseña"
                  required
                  {...loginRegister("password", { required: true })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              INGRESAR
            </button>
          </form>
        </div>
      </div>

      {/* REGISTRARSE */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Sistema de Inventario de Bodega
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Estimado usuario si no cuenta con una sesión en este sistema puedo
            crearlo ingresando su correo y digitando una nueva contraseña :D
          </p>

          <form
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            onSubmit={handleRegister}
          >
            <p className="text-center text-lg font-medium">REGISTRATE</p>

            <div>
              <label htmlFor="text2" className="sr-only">
                Usuario
              </label>

              <div className="relative">
                <input
                  type="email"
                  id="text2"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Ingrese su correo"
                  //disabled
                  {...registerRegister("email2", { require: true })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password2" className="sr-only">
                Contraseña
              </label>

              <div className="relative">
                <input
                  type="password"
                  id="password2"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Cree una contraseña contraseña"
                  required
                  {...registerRegister("password22", { required: true })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              REGISTRARME
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
