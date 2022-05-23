function VARIABLE_TRANSITION_MANAGER() {
  const lablesRef = document.querySelectorAll('label');
  const progressBarsRef = Array.from(
    document.querySelectorAll('.progress-bar')
  );
  const checkersRef = document.querySelectorAll("input[type='checkbox']");

  function onClickHandler(position) {
    return () => {
      progressBarsRef[position].classList.toggle('progress-bar--active');
      lablesRef[position].classList.toggle('label--active');
    };
  }

  const actions = () => ({
    render(otherNodesMounter = () => {}) {
      checkersRef.forEach((btnRef, position) => {
        btnRef.addEventListener('click', onClickHandler(position));

        return function clearDOM() {
          btnRef.removeEventListener('click', onClickHandler(position));
        };
      });
      otherNodesMounter?.();
    },
  });

  return actions;
}

const actions = VARIABLE_TRANSITION_MANAGER()();

actions.render(() => {
  console.log('INCASE EXTRA DOM/OTHER COMPUTATION__//__');
});
