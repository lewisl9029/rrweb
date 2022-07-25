import type { Mirror } from '@highlight-run/rrweb-snapshot';
import { blockClass, canvasManagerMutationCallback, IWindow, listenerHandler } from '../../../types';
export default function initCanvasWebGLMutationObserver(cb: canvasManagerMutationCallback, win: IWindow, blockClass: blockClass, mirror: Mirror): listenerHandler;