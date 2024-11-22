const SchoolForm = ({ userType }) => {
  return (
    <>
      <div>
        <form>
          {userType == "student" && (
            <label>
              Grade:
              <input type="text" />
            </label>
          )}
          {userType == "teacher" && (
            <label>
              Subject:
              <input type="text" />
            </label>
          )}
        </form>
      </div>
    </>
  );
};

export default SchoolForm;
