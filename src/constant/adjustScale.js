const adjusctScale = () => {
    let screenScale;

    if (window.innerWidth < 768) {
      screenScale = 0.6;
    } else {
      screenScale = 1;
    }

    return screenScale;
  };

export default adjusctScale;