/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

//codigo de media abaixo

const btnCriar = document.getElementById("btnCriar");
btnCriar.addEventListener("click", () => {criar()});

function criar(){
  const nunCriar = parseInt(document.getElementById("nc1").value);
  const darthVader = document.getElementById("formCalcular");

  for(let i=0; i<nunCriar; i++){
    let luke = document.createElement("div");
    luke.innerHTML = `<label for="nn${i+1}">Nota ${i+1}:</label><input id="nn${i+1}" type="number" name="nn${i+1}"><br><br>`;
    darthVader.appendChild(luke);
  }
  let luke = document.createElement("div");
  luke.innerHTML = `<input id="btnCalcular" type="button" value="Calcular">`;
  darthVader.appendChild(luke);
  escutante(nunCriar);
}

function escutante(a){
  const btnCalcular = document.getElementById("btnCalcular");
  btnCalcular.addEventListener("click", () => {calcular(a)});
}

function calcular(b){
  var total = 0;
  for(let i=0; i<b; i++){
    total += parseInt(document.getElementById(`nn${i+1}`).value);
  }
  var media = total/b;

  if(media>6){
    var p = `Nota média: ${media}... Aprovado!`
  }
  else{
    var p = `Nota média: ${media}... Reprovado!`
  }

  document.getElementById("result").innerHTML = p;
}