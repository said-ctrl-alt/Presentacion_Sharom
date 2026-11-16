const summerStages = [
  {
    title: "Preparación",
    steps: [
      { number: "01", text: "Mantener la cabina limpia y bajo normas de bioseguridad." },
      { number: "02", text: "Ubicar al usuario en decúbito dorsal con la cabeza elevada a 30°." },
      { number: "03", text: "Realizar la valoración de la piel." }
    ]
  },
  {
    title: "Preparación de la piel",
    steps: [
      {
        number: "04",
        text: "Aplicar Ácido salicílico al 3 % durante 3 minutos y retirar.",
        details: [{ name: "Ácido salicílico", text: "Exfolia la piel y ayuda a limpiar los poros." }]
      },
      {
        number: "05",
        text: "Tonificar la piel.",
        details: [{ name: "Tónico con camomila", text: "Descongestionar y preparar la piel." }]
      }
    ]
  },
  {
    title: "Exfoliación",
    steps: [
      {
        number: "06",
        text: "Aplicar Exfoliante mineral (microcristales de óxido de aluminio) con movimientos suaves en zigzag durante 10 segundos.",
        details: [{ name: "Microcristales de óxido de aluminio", text: "Retiran células muertas y mejoran la textura de la piel." }]
      },
      { number: "07", text: "Retirar el producto y tonificar nuevamente." }
    ]
  },
  {
    title: "Preparación para el peeling",
    steps: [
      {
        number: "08",
        text: "Aplicar Máscara descongestiva de caléndula o manzanilla durante 3 minuto.",
        details: [{ name: "Caléndula o manzanilla", text: "Calman y disminuyen la irritación de la piel." }]
      }
    ]
  },
  {
    title: "Aplicación del peeling",
    steps: [
      {
        number: "09",
        text: "Aplicar Peeling de Gluconolactona + Ácido Mandélico durante 15 minutos y masajear el último minuto.",
        details: [
          { name: "Gluconolactona", text: "Exfolia suavemente e hidrata la piel." },
          { name: "Ácido mandélico", text: "Ayuda a mejorar manchas, acné y textura de la piel." }
        ]
      },
      { number: "10", text: "Retirar completamente el peeling." }
    ]
  },
  {
    title: "Recuperación",
    steps: [
      {
        number: "11",
        text: "Aplicar Máscara hidratante o equilibrante.",
        details: [{ name: "Máscara hidratante", text: "Calma e hidrata la piel después del peeling." }]
      }
    ]
  },
  {
    title: "Sellado",
    steps: [
      {
        number: "12",
        text: "Aplicar:",
        details: [
          { name: "Vitamina C", text: "Ilumina y protege la piel." },
          { name: "Niacinamida", text: "Regula la grasa y fortalece la barrera cutánea." },
          { name: "Ácido hialurónico", text: "Hidrata profundamente la piel." },
          { name: "Fotoprotector", text: "Protege la piel de los rayos UV y previene manchas." }
        ]
      }
    ]
  }
];

const argilacStages = [
  {
    title: "Preparación de la cabina",
    steps: [
      { number: "—", text: "Mantener la cabina limpia, organizada y bajo normas de bioseguridad." },
      { number: "—", text: "Preparar la camilla y la mesa auxiliar con todos los materiales necesarios." },
      { number: "—", text: "La cosmetóloga debe utilizar los elementos de protección personal." },
      { number: "—", text: "Ubicar al usuario en posición de decúbito dorsal con la cabeza elevada a 30°." },
      { number: "—", text: "Explicar el procedimiento y obtener el consentimiento informado." }
    ]
  },
  {
    title: "Higiene inicial",
    steps: [
      { number: "01", text: "Pasar una compresa húmeda por el rostro." },
      {
        number: "02",
        text: "Aplicar el dermolimpiador con movimientos suaves durante aproximadamente 2 minutos.",
        details: [{ name: "Dermolimpiador", text: "Elimina suciedad, grasa y residuos de la piel." }]
      },
      {
        number: "03",
        text: "Retirar el producto y tonificar con camomila.",
        details: [{ name: "Camomila", text: "Calma, descongestiona y prepara la piel para el procedimiento." }]
      },
      { number: "04", text: "En mujeres, extender la higiene al cuello y escote, según el protocolo." }
    ]
  },
  {
    title: "Preparación cutánea",
    steps: [
      {
        number: "06",
        text: "Aplicar Ácido salicílico al 3 % durante 3 minutos.",
        details: [{ name: "Ácido salicílico al 3 %", text: "Exfolia la piel y ayuda a limpiar los poros." }]
      },
      {
        number: "07",
        text: "Retirar y tonificar nuevamente con camomila.",
        details: [{ name: "Camomila", text: "Ayuda a calmar la piel." }]
      }
    ]
  },
  {
    title: "Exfoliación",
    steps: [
      {
        number: "08",
        text: "Aplicar Microcristales de óxido de aluminio con movimientos suaves en zigzag.",
        details: [{ name: "Microcristales de óxido de aluminio", text: "Retiran células muertas y mejoran la textura de la piel." }]
      },
      { number: "09", text: "Retirar los residuos y tonificar." }
    ]
  },
  {
    title: "Preparación para el peeling",
    steps: [
      {
        number: "10",
        text: "Aplicar una Máscara descongestiva de caléndula o manzanilla.",
        details: [{ name: "Máscara descongestiva", text: "Disminuye la sensibilidad y calma la piel." }]
      }
    ]
  },
  {
    title: "Aplicación del peeling",
    steps: [
      {
        number: "11",
        text: "Aplicar el Peeling Avanzado Argilac MQSK sobre la piel seca, evitando ojos y labios.",
        details: [{ name: "Peeling Avanzado Argilac MQSK", text: "Favorece la renovación celular, mejora la textura, ayuda a disminuir manchas, aporta luminosidad y arrugas de la edad." }]
      },
      { number: "12", text: "Dejar actuar el tiempo indicado por el fabricante y retirar completamente." },
      {
        number: "13",
        text: "Tonificar nuevamente con camomila.",
        details: [{ name: "Camomila", text: "Ayuda a disminuir el enrojecimiento y favorece la recuperación de la piel." }]
      }
    ]
  },
  {
    title: "Sellado del procedimiento",
    steps: [
      {
        number: "14",
        text: "Finalizar con los activos indicados por la profesional:",
        details: [
          { name: "Vitamina C", text: "Ilumina la piel y aporta acción antioxidante." },
          { name: "Niacinamida", text: "Fortalece la barrera cutánea y unifica el tono." },
          { name: "Ácido hialurónico", text: "Hidrata profundamente la piel." },
          { name: "Protector solar FPS 50+", text: "Protege la piel de los rayos UV y evita la aparición de manchas." }
        ]
      }
    ]
  }
];

const caseControls = [
  {
    title: "Control #1",
    summary: "Paciente con impresión diagnóstica inicial de discromía, pérdida de agua transepidérmica, piel sensible reactiva, orificios pilosebáceos imperceptibles, piel engrosada, telangiectasia y micropápulas.",
    conduct: "Peeling avanzado con Argilac Mask.",
    diagnosis: "Discromía, deshidratación cutánea y signos de fotoenvejecimiento.",
    progress: "La paciente toleró adecuadamente el procedimiento. Se observa una leve mejoría en la hidratación cutánea, una piel con aspecto más luminoso y una ligera disminución de la apariencia de la discromía. La textura comienza a suavizarse, iniciando el proceso de renovación celular y rejuvenecimiento de la piel."
  },
  {
    title: "Control #2",
    summary: "Se realiza control posterior al primer procedimiento. Se evidencia mejor hidratación, mayor luminosidad y una textura cutánea más uniforme.",
    conduct: "Peeling de verano con gluconolactona + mandélico.",
    diagnosis: "Disminución parcial de la discromía y mejoría de la pérdida de agua transepidérmica. Persisten telangiectasias discretas.",
    progress: "La piel presenta una mejor respuesta al tratamiento. Se observa mayor uniformidad del tono, disminución de la apariencia de las manchas, poros menos perceptibles y una textura más lisa. La hidratación ha mejorado notablemente, aportando un aspecto más fresco, saludable y con evidentes signos de rejuvenecimiento cutáneo."
  },
  {
    title: "Control #3",
    summary: "Paciente con evolución favorable posterior al protocolo de peeling. Se evidencia una mejor calidad de la piel en comparación con los controles anteriores.",
    conduct: "Peeling de verano con gluconolactona + mandélico.",
    diagnosis: "Mejoría significativa de la discromía, hidratación cutánea adecuada y disminución de la pérdida de agua transepidérmica.",
    progress: "Se observa una piel más uniforme, luminosa e hidratada. La textura es más suave, con disminución de las telangiectasias, mejor elasticidad y firmeza cutánea. Los poros son menos visibles, las líneas finas de expresión se perciben atenuadas y el aspecto general refleja una piel revitalizada, con mayor calidad, luminosidad y claros signos de rejuvenecimiento. La paciente presenta excelente tolerancia al tratamiento y evolución satisfactoria."
  }
];

function renderDetails(details = []) {
  if (!details.length) return "";
  return `<ul class="step-details">${details.map(({ name, text }) =>
    `<li><span class="detail-name">${name}</span><span>${text}</span></li>`
  ).join("")}</ul>`;
}

function renderStages(stages, containerId, prefix) {
  const container = document.getElementById(containerId);
  container.innerHTML = stages.map((stage, index) => `
    <article class="stage-card" id="${prefix}-etapa-${index + 1}" data-reveal>
      <div class="stage-card-head">
        <span class="stage-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${stage.title}</h3>
        <span class="stage-count">${stage.steps.length} ${stage.steps.length === 1 ? "paso" : "pasos"}</span>
      </div>
      <div class="stage-card-body">
        ${stage.steps.map(step => `
          <div class="protocol-step">
            <span class="step-number">${step.number}</span>
            <div class="step-copy"><p>${step.text}</p>${renderDetails(step.details)}</div>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderControls() {
  document.getElementById("case-timeline").innerHTML = caseControls.map((control, index) => `
    <article class="control-card" data-reveal>
      <div class="control-marker"><span>0${index + 1}</span></div>
      <div class="control-content">
        <div class="control-topline">
          <h3>${control.title}</h3>
          <span class="control-patient">Magnolia Abdala <i>·</i> 48 años</span>
        </div>
        <div class="control-grid">
          <div class="control-field"><span>Resumen</span><p>${control.summary}</p></div>
          <div class="control-field conduct-field"><span>Conducta</span><p>${control.conduct}</p></div>
          <div class="control-field"><span>Impresión diagnóstica</span><p>${control.diagnosis}</p></div>
          <div class="control-field progress-field"><span>Evolución / Mejorías</span><p>${control.progress}</p></div>
        </div>
      </div>
    </article>
  `).join("");
}

renderStages(summerStages, "summer-stages", "verano");
renderStages(argilacStages, "argilac-stages", "argilac");
renderControls();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll("[data-reveal], .stage-card").forEach(element => revealObserver.observe(element));

const progressBar = document.getElementById("reading-progress-bar");
const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.transform = `scaleX(${progress})`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const sections = [...document.querySelectorAll("#verano, #argilac, #controles")];
const navLinks = [...document.querySelectorAll(".main-nav a")];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      const active = link.hash === `#${entry.target.id}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-30% 0px -55% 0px" });
sections.forEach(section => sectionObserver.observe(section));
