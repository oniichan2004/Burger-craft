import { useState } from "react";

export default function Burger() {
  const [selectedMeat, setSelectedMeat] = useState("vita");
  return (
    <div className=" flex justify-between ps-10 pe-10 m-10 bg-blue-900">
      <div className=" w-70 h-400 ">
        <div className=" flex flex-col gap-2 ">
          <p>1.Chifla</p>
          <select
            title="Chifla"
            className="w-40 border-2 border-solid border-yellow-500 text-sm/9"
          >
            <option>CHIFLA BRIOCHE (10lei)</option>
          </select>
          <p>2.CARNE</p>
          <select
           value={selectedMeat}
           onChange={ (e)=> setSelectedMeat(e.target.value)}
            title="CARNE"
            className="w-40 border-2 border-solid border-yellow-500 text-sm/9 "
          >
            <option value ='vita'>PARJOALA VITA (45lei)</option>
            <option value ='pui-pane'> FILE DE PUI PANE (32lei)</option>
            <option value ='pui-grill'>FILE DE PUI GRILL (32lei)</option>
          </select>






















          <p>3.Sos chifla jos</p>
          <select
            title="sos chifla jos"
            className="w-40 border-2 border-solid border-yellow-500 text-sm/9"
          >
            <option>- </option>
            <option> sos ketchup (8lei)</option>
            <option>mayoneza (8lei)</option>
            <option>sos caise (10lei)</option>
            <option>sos ranch (12lei)</option>
            <option>sos bbq (8lei)</option>
            <option>sos tartar (8lei)</option>
          </select>

          <p>4.Sos chifla sus</p>
          <select
            title="sos chifla sus"
            className="w-40 border-2 border-solid border-yellow-500 text-sm/9"
          >
            <option>- </option>
            <option> sos ketchup (8lei)</option>
            <option>mayoneza (8lei)</option>
            <option>sos caise (10lei)</option>
            <option>sos ranch (12lei)</option>
            <option>sos bbq (8lei)</option>
            <option>sos tartar (8lei)</option>
          </select>

          <p>5.Cascaval</p>
          <select
            title="Cascaval"
            className="w-40 border-2 border-solid border-yellow-500 text-sm/9"
          >
            <option>- </option>
            <option>CASCAVAL CHEDDAR (16lei)</option>
            <option>CASCAVAL DORBLU(19lei)</option>
          </select>

          <p>6.Topping</p>
          <div className="flex flex-col gap-6">
            <select
              title="Topping"
              className="w-40 border-2 border-solid border-yellow-500 text-sm/9"
            >
              <option>- </option>
              <option> CEAPA (5lei)</option>
              <option>CEAPA KRISPY (7lei)</option>
              <option>CEAPA GRILL (5lei)</option>
              <option>CEAPA GRILL KRISPY (8lei)</option>
              <option> CASTRAVETI(16lei)</option>
              <option>ROSII CHERY (25lei)</option>
            </select>
            <input
              type="text"
              placeholder="Burger name"
              className="w-40  h-7 border-2 border-solid border-yellow-500 text-sm/9"
            />

            <hr className="border border-yellow-500 w-40  " />
            <div>
              <button className="bg-yellow-100 border border-solid border-yellow-500 cursor-pointer">
                Incepe de la zero
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-90">
        <div className="h-60">
          <div>
            <span>chifla</span>
            <img className="w-45" src="/chifla-sus.svg" alt="" />
          </div>

          <div>

            {selectedMeat === 'vita' && <span>parjoala de vita</span>}
            {selectedMeat ==='pui-pane' && <span> parjoala de pui pane </span>}
           { selectedMeat === 'pui-grill' && <span> parjoala de pui grill </span>}
            {selectedMeat === 'vita' && <img className="w-45" src="/pirjoala-vita.svg" alt="" />}
            {selectedMeat === 'pui-pane' && <img className="w-45" src="parjoala-pui.svg" alt="" />}
            {selectedMeat === 'pui-grill' && <img className="w-45" src="/parjoala-pui.svg" alt="" />}


          </div>
          <div>
            <span>chifla</span>
            <img className="w-45" src="/chifla-jos.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
