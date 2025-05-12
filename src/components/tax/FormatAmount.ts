
export const formatAmount = (amount: number | null): string => {
  if (amount === null) return '∞';
  
  if (amount >= 1000) {
    return `${amount / 1000} Md€`;
  }
  return `${amount} M€`;
};
