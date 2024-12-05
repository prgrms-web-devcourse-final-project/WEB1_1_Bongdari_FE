const useCalculateDeadline = () => {
  const calculateRemainingDays = (dueDate: string) => {
    const today = new Date();
    const endDate = new Date(dueDate);

    const diffDate = endDate.getTime() - today.getTime();
    const remainingDays = Math.ceil(diffDate / (1000 * 60 * 60 * 24));

    return remainingDays;
  };

  return { calculateRemainingDays };
};

export default useCalculateDeadline;
