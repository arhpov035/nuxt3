import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const usePriceSetPieceStore = defineStore("priceSetPieceStore", () => {
  // const previousPrice = localStorage.price || 2800
  // const price = ref(previousPrice);
  const price = ref(1440);
  const pricePiece = ref(240);
  const piece = ref(6);
  const activeItem = ref(6);
  const activePiece = ref(1);
  const isOpacityPrev = ref(true);
  const isOpacityNext = ref(false);

  const setActive = (id) => {
    activeItem.value = id;
    localStorage.activeItem = activeItem.value;

    price.value = pricePiece.value * id;
    localStorage.price = price.value;

    piece.value = id;
    localStorage.piece = piece.value;
  };

  const prev = (id) => {
    if (id == 3) {
      activePiece.value = 2;
      localStorage.activePiece = activePiece.value;

      isOpacityNext.value = false;
      localStorage.isOpacityNext = isOpacityNext.value;
    } else if (id == 2) {
      activePiece.value = 1;
      localStorage.activePiece = activePiece.value;

      isOpacityPrev.value = true;
      localStorage.isOpacityPrev = isOpacityPrev.value;
    }
  };
  const next = (id) => {
    if (id == 1) {
      activePiece.value = 2;
      localStorage.activePiece = activePiece.value;

      isOpacityPrev.value = false;
      localStorage.isOpacityPrev = isOpacityPrev.value;
    } else if (id == 2) {
      activePiece.value = 3;
      localStorage.activePiece = activePiece.value;

      isOpacityNext.value = true;
      localStorage.isOpacityNext = isOpacityNext.value;
    }
  };

  onMounted(() => {
    if (localStorage.price) {
      price.value = +localStorage.price;
    }

    if (localStorage.piece) {
      piece.value = +localStorage.piece;
    }

    if (localStorage.activePiece) {
      activePiece.value = +localStorage.activePiece;
    }

    if (localStorage.isOpacityPrev) {
      isOpacityPrev.value = +localStorage.isOpacityPrev;
    }
    if (localStorage.isOpacityNext) {
      isOpacityNext.value = +localStorage.isOpacityNext;
    }
    if (localStorage.activeItem) {
      activeItem.value = +localStorage.activeItem;
    }
  });

  return {
    price,
    piece,
    activeItem,
    pricePiece,
    activePiece,
    isOpacityPrev,
    isOpacityNext,
    setActive,
    prev,
    next,
  };
});
