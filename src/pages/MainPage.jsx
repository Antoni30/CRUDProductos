import { useForm } from "react-hook-form";

function MainPage() {
  const { register, handleSubmit } = useForm();
  const OnSumbmit = handleSubmit((value)=>{
    console.log(value)
  })
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Sistema de Inventario de Bodega
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Desarrollar un sistema de inventario de bodega utilizando
            tecnologías de desarrollo web front-end y back-end, integrando
            conceptos y herramientas aprendidas durante el parcial.
          </p>

          <form
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Iniciar sesión en su cuenta
            </p>

            <div>
              <label htmlFor="text" className="sr-only">
                Usuario
              </label>

              <div className="relative">
                <input
                  type="text"
                  id="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Ingrese su usuario"
                  {...register("userName",{require:true})}
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
                  {...register('password',{required:true})}
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              onClick={OnSumbmit}
            >
              INGRESAR
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default MainPage;
