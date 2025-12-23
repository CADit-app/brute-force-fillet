import { ManifoldToplevel } from 'manifold-3d';

let manifold: ManifoldToplevel | undefined;

export const setupFillet = (manifoldInstance: ManifoldToplevel) => {
  manifold = manifoldInstance;
};

export const getManifold = (): ManifoldToplevel => {
  if (!manifold) {
    throw new Error('Manifold instance not set. Call setupFillet(manifold) before using fillet functions...');
  }
  return manifold;
};
