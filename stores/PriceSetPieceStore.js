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
  const offset = ref(0);

  const setActive = (id) => {
    activeItem.value = id;
    localStorage.activeItem = activeItem.value;

    price.value = pricePiece.value * id;
    localStorage.price = price.value;

    piece.value = id;
    localStorage.piece = piece.value;
  };

  const prev = () => {
    offset.value = offset.value - 275;
    localStorage.offset = offset.value;
      if(offset.value == 0) {
        isOpacityPrev.value = true;
        localStorage.isOpacityPrev = isOpacityPrev.value;
      }
      isOpacityNext.value = false;
      localStorage.isOpacityNext = isOpacityNext.value;
  };
  const next = () => {
      offset.value = offset.value + 275;
      localStorage.offset = offset.value;
      if(offset.value != 0){
        isOpacityPrev.value = false;
        localStorage.isOpacityPrev = isOpacityPrev.value;
      }
      console.log(offset.value)
      if(offset.value == 550) {
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
    if (localStorage.offset) {
      offset.value = +localStorage.offset;
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
    offset,
    setActive,
    prev,
    next,
  };
});
