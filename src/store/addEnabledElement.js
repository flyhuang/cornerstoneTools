import {
  keyboardEventListeners,
  mouseEventListeners,
  mouseWheelEventListeners,
  touchEventListeners
} from '../eventListeners/index.js';
import {
  imageRenderedEventDispatcher,
  mouseToolEventDispatcher,
  newImageEventDispatcher,
  touchToolEventDispatcher
} from '../eventDispatchers/index.js';
import { mutations } from './index.js';

// TODO: Canvases are already tracked by `cornerstone`, but should we track them as well?
// TODO: This might be easier if `cornerstone` emitted events for enable/disable of canvases
// TODO: Then we could just respond to those events and not worry about tracking/lifecycle
export default function (enabledElement) {
  // Listeners
  keyboardEventListeners.enable(enabledElement);
  mouseEventListeners.enable(enabledElement);
  mouseWheelEventListeners.enable(enabledElement);
  touchEventListeners.enable(enabledElement);

  // Dispatchers
  imageRenderedEventDispatcher.enable(enabledElement);
  mouseToolEventDispatcher.enable(enabledElement);
  newImageEventDispatcher.enable(enabledElement);
  touchToolEventDispatcher.enable(enabledElement);

  // State
  mutations.ADD_ENABLED_ELEMENT(enabledElement);
}
