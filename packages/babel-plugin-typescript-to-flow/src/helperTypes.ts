import template from '@babel/template';

const ast = template({
  plugins: ['flow'],
}).ast;

const Pick = ast`type Pick<T: {}, K: $Keys<T>> = $ObjMapi<
  { [K]: any },
  <KK>(KK) => $ElementType<T, KK>
>;`;

const Omit = ast`type Omit<T: {}, K: $Keys<T>> = $ObjMapi<
  T,
  (<KK: K>(KK) => any) & (<KK: mixed>(KK) => $ElementType<T, KK>)
>;`;

export default {
  Pick,
  Omit,
};
