export const signup = async (req, res, next) => {
  const { email, country_id, institution_id, initial_name } = req.value.body;

  const physician = {
    email: encodeURIComponent(email).toLowerCase(),
  };
  const physician_id = undefined;

  let err = {};

  const emailExists = await physicianModel.email_exists(
    physician.email,
    physician_id
  );
  if (emailExists.success) {
    err.email = 'Email already exists';
  }


  if (common.isEmptyObj(err)) {
    next();
  } else {
    let return_err = { status: 2, errors: err };
    return res.status(400).json(return_err);
  }
};
