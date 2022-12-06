import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../utlis/firebase";

const DeleteWebsite = ({ site }) => {
  const docRef = doc(db, "themes", site.id);
  const handleDeleteWebsite = async () => {
    try {
      const deletedDoc = await deleteDoc(docRef);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        {/* <button className="Button violet">Delete account</button> */}
        <div className="flex flex-col group items-center gap-2 justify-center cursor-pointer">
          <svg
            className="fill-[#4d5660] lg:w-[48px] lg:h-[48px] md:h-[48px] md:w-[48px] h-8 w-8 group-hover:fill-[#00a991]"
            viewBox="0 0 60 60"
          >
            <g>
              <path
                d="M19,45c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S16.794,45,19,45z M19,39c1.103,0,2,0.897,2,2s-0.897,2-2,2
 s-2-0.897-2-2S17.897,39,19,39z"
              ></path>
              <path
                d="M44,12c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S46.206,12,44,12z M44,18c-1.103,0-2-0.897-2-2s0.897-2,2-2
 s2,0.897,2,2S45.103,18,44,18z"
              ></path>
              <path
                d="M19,49c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S14.589,49,19,49z M19,35c3.309,0,6,2.691,6,6s-2.691,6-6,6
 s-6-2.691-6-6S15.691,35,19,35z"
              ></path>
              <path
                d="M59.187,36.913c0.12-0.507,0.227-1.018,0.32-1.534c0.005-0.027,0.012-0.053,0.017-0.08c0.001-0.006,0-0.012,0.001-0.018
 C59.831,33.564,60,31.802,60,30c0-4.126-0.838-8.059-2.351-11.64c-0.006-0.016-0.006-0.034-0.013-0.05
 c-1.161-2.74-2.739-5.284-4.643-7.551c-1.12-1.336-2.354-2.572-3.686-3.695c-2.284-1.929-4.85-3.528-7.617-4.699
 c-0.015-0.007-0.032-0.007-0.048-0.012C38.061,0.838,34.126,0,30,0c-1.738,0-3.44,0.157-5.098,0.442c-0.003,0-0.006,0-0.008,0
 c-0.028,0.005-0.056,0.011-0.085,0.017c-0.405,0.071-0.808,0.148-1.207,0.235c-0.022,0.005-0.044,0.011-0.067,0.016
 c-1.597,0.352-3.145,0.833-4.636,1.429c-0.137,0.055-0.276,0.106-0.412,0.163c-0.224,0.093-0.443,0.194-0.664,0.292
 c-0.216,0.096-0.432,0.191-0.646,0.292c-0.174,0.083-0.346,0.17-0.518,0.256c-0.048,0.024-0.096,0.047-0.144,0.071
 c-0.013,0.006-0.028,0.006-0.042,0.013c-0.06,0.03-0.117,0.064-0.177,0.095c-0.14,0.072-0.278,0.147-0.417,0.221
 c-0.123,0.066-0.245,0.133-0.367,0.201c-0.142,0.079-0.286,0.154-0.427,0.235c-0.167,0.096-0.33,0.197-0.495,0.296
 c-0.086,0.052-0.171,0.103-0.256,0.156c-0.348,0.213-0.691,0.434-1.031,0.661c-0.035,0.023-0.07,0.046-0.104,0.07
 c-0.178,0.12-0.356,0.239-0.531,0.363c-0.023,0.016-0.046,0.034-0.069,0.051c-0.373,0.266-0.74,0.541-1.101,0.824
 c-0.012,0.009-0.024,0.017-0.035,0.026c-0.003,0.002-0.004,0.005-0.006,0.007c-1.644,1.293-3.162,2.759-4.518,4.387
 c-0.018,0.021-0.027,0.047-0.042,0.07C2.591,16.082,0,22.744,0,30c0,2.995,0.447,5.887,1.268,8.618
 c0.002,0.007-0.001,0.015,0.001,0.022c0.01,0.032,0.022,0.062,0.031,0.094c0.166,0.544,0.344,1.083,0.54,1.613
 c0.069,0.189,0.148,0.373,0.221,0.56c0.121,0.31,0.243,0.619,0.374,0.923c0.134,0.313,0.276,0.62,0.42,0.927
 c0.068,0.143,0.135,0.286,0.205,0.427c2.928,6.002,7.763,10.836,13.766,13.762c0.134,0.066,0.27,0.13,0.405,0.194
 c0.313,0.147,0.627,0.292,0.946,0.428c0.29,0.125,0.584,0.24,0.879,0.356c0.201,0.079,0.399,0.164,0.603,0.238
 c0.525,0.193,1.059,0.37,1.597,0.534c0.035,0.011,0.068,0.024,0.104,0.035c0.012,0.004,0.025,0.002,0.037,0.005
 C24.124,59.555,27.011,60,30,60c4.995,0,9.705-1.234,13.852-3.402c0.027-0.011,0.055-0.017,0.082-0.031
 c0.073-0.038,0.141-0.082,0.214-0.12c0.243-0.131,0.481-0.269,0.72-0.406c0.224-0.128,0.451-0.252,0.671-0.386
 c0.422-0.256,0.837-0.523,1.245-0.8c0.175-0.118,0.343-0.245,0.515-0.367c0.272-0.193,0.543-0.386,0.808-0.588
 c0.149-0.114,0.295-0.231,0.442-0.347c0.295-0.232,0.585-0.469,0.871-0.712c0.107-0.091,0.213-0.183,0.318-0.276
 c0.348-0.304,0.688-0.617,1.021-0.937c0.039-0.038,0.079-0.074,0.118-0.113c0.482-0.468,0.952-0.949,1.402-1.448
 c0.015-0.015,0.037-0.021,0.051-0.038c2.222-2.475,3.994-5.267,5.285-8.31c0.047-0.11,0.089-0.222,0.134-0.332
 c0.108-0.262,0.218-0.522,0.319-0.788c0.004-0.01,0.002-0.021,0.005-0.031c0.435-1.152,0.799-2.338,1.091-3.552
 C59.172,36.982,59.179,36.947,59.187,36.913z M49.04,50.505c-0.25,0.233-0.507,0.459-0.766,0.683
 c-0.098,0.085-0.195,0.172-0.295,0.256c-0.203,0.172-0.412,0.337-0.621,0.502c-0.16,0.127-0.318,0.255-0.481,0.378
 c-0.16,0.121-0.323,0.238-0.486,0.356c-0.152,0.11-0.304,0.219-0.458,0.326c0.215-0.959,0.125-1.974-0.283-2.909
 c-0.65-1.49-1.998-2.527-3.604-2.774L41,47.161v-1.777l0.994-0.19c1.597-0.308,2.905-1.395,3.499-2.908
 c0.594-1.513,0.375-3.199-0.587-4.511l-0.626-0.853l1.257-1.258l1.281,0.869c1.316,0.892,2.979,1.06,4.448,0.452
 c1.469-0.608,2.526-1.904,2.826-3.466L54.384,32h1.777l0.161,1.046c0.141,0.915,0.53,1.739,1.137,2.414
 c-0.244,1.23-0.577,2.436-0.983,3.613C56.154,39.024,55.828,39,55.5,39c-3.584,0-6.5,2.916-6.5,6.5c0,1.386,0.44,2.705,1.242,3.808
 c-0.355,0.373-0.717,0.739-1.093,1.092C49.113,50.435,49.077,50.471,49.04,50.505z M55.326,41.904
 c-0.992,2.097-2.245,4.064-3.716,5.856C51.213,47.08,51,46.306,51,45.5c0-2.481,2.019-4.5,4.5-4.5c0.076,0,0.151,0.002,0.226,0.006
 c-0.113,0.262-0.225,0.524-0.345,0.782C55.363,41.827,55.344,41.865,55.326,41.904z M44,28c-6.617,0-12-5.383-12-12
 c0-5.526,3.843-10.378,9.184-11.662c1.948,0.852,3.782,1.917,5.47,3.169c0.033,0.025,0.067,0.048,0.1,0.073
 c0.275,0.206,0.542,0.42,0.809,0.636c0.086,0.069,0.175,0.136,0.26,0.206c0.2,0.166,0.394,0.339,0.589,0.51
 c0.142,0.124,0.287,0.244,0.427,0.372c0.074,0.068,0.145,0.14,0.219,0.208c0.508,0.473,0.998,0.963,1.47,1.472
 c0.055,0.059,0.112,0.115,0.167,0.175c0.132,0.145,0.258,0.297,0.387,0.445c0.166,0.19,0.335,0.377,0.496,0.572
 c0.073,0.088,0.142,0.18,0.214,0.27c0.213,0.264,0.425,0.528,0.628,0.799c0.028,0.037,0.054,0.076,0.082,0.114
 c1.25,1.685,2.311,3.516,3.162,5.46C54.377,24.158,49.526,28,44,28z M23.228,2.834c-0.157,0.745-0.097,1.53,0.193,2.268
 c0.5,1.274,1.602,2.19,2.947,2.449L27,7.672v1.086L26.333,8.86c-1.353,0.208-2.488,1.081-3.036,2.336
 c-0.548,1.256-0.417,2.683,0.352,3.816l0.361,0.534l-0.768,0.767l-0.177-0.13c-1.129-0.828-2.575-1.003-3.869-0.467
 c-1.293,0.536-2.193,1.683-2.405,3.065L16.757,19h-1.085l-0.122-0.632c-0.258-1.346-1.174-2.447-2.449-2.948
 c-1.275-0.5-2.695-0.314-3.799,0.494l-0.544,0.399L7.99,15.547l0.361-0.534c0.677-1,0.851-2.209,0.509-3.342
 c0.1-0.115,0.198-0.232,0.299-0.345c0.255-0.285,0.518-0.562,0.784-0.835c0.275-0.283,0.557-0.559,0.843-0.83
 c0.133-0.125,0.269-0.247,0.404-0.369C11.764,11.42,13.693,13,16,13c2.757,0,5-2.243,5-5c0-1.527-0.693-2.904-1.807-3.827
 c0.612-0.256,1.235-0.488,1.865-0.7c0.065-0.022,0.129-0.044,0.194-0.066C21.903,3.193,22.561,3,23.228,2.834z M13.01,7.772
 c0.081-0.062,0.158-0.127,0.24-0.188C13.652,7.284,14.067,7,14.485,6.72c0.202-0.135,0.401-0.275,0.606-0.404
 c0.026-0.017,0.052-0.034,0.078-0.05c0.423-0.265,0.858-0.509,1.294-0.75c0.191-0.106,0.378-0.22,0.571-0.321
 C18.208,5.623,19,6.73,19,8c0,1.654-1.346,3-3,3s-3-1.346-3-3C13,7.925,13.004,7.849,13.01,7.772z M13.117,26.116
 c0.029-0.009,0.059-0.005,0.088-0.017c0.035-0.014,0.059-0.042,0.092-0.059C15.072,25.369,16.994,25,19,25c8.822,0,16,7.178,16,16
 c0,2.292-0.488,4.472-1.354,6.449c-0.009,0.017-0.025,0.028-0.033,0.046c-0.01,0.022-0.007,0.046-0.015,0.068
 c-2.117,4.732-6.467,8.26-11.881,9.186c-0.003-0.001-0.005-0.001-0.008-0.002c-0.493-0.152-0.977-0.322-1.458-0.5
 c-0.225-0.083-0.446-0.175-0.668-0.264c-0.23-0.092-0.459-0.186-0.686-0.283c-0.297-0.129-0.593-0.262-0.885-0.401
 c-0.107-0.051-0.213-0.104-0.32-0.156c-5.57-2.738-10.103-7.271-12.839-12.841c-0.051-0.104-0.102-0.208-0.152-0.313
 c-0.14-0.293-0.273-0.59-0.403-0.889c-0.098-0.227-0.191-0.456-0.283-0.686c-0.089-0.221-0.18-0.442-0.263-0.666
 c-0.178-0.482-0.348-0.968-0.501-1.462c0-0.002-0.001-0.003-0.001-0.005C4.22,32.612,8.044,28.108,13.117,26.116z M25.722,57.673
 c4.076-1.622,7.352-4.644,9.3-8.458l1.571,0.698C36.726,49.973,36.864,50,37,50c0.383,0,0.749-0.222,0.915-0.594
 c0.224-0.505-0.003-1.096-0.508-1.32l-1.564-0.695C36.591,45.402,37,43.247,37,41c0-1.948-0.321-3.821-0.896-5.579l1.258-0.489
 c0.515-0.2,0.77-0.779,0.57-1.294c-0.2-0.515-0.777-0.772-1.294-0.569l-1.267,0.492c-1.684-3.69-4.571-6.711-8.165-8.562
 l0.708-1.593c0.224-0.505-0.003-1.096-0.508-1.32c-0.505-0.223-1.095,0.004-1.32,0.508l-0.709,1.595C23.392,23.433,21.248,23,19,23
 c-1.948,0-3.819,0.322-5.581,0.891l-0.487-1.253c-0.2-0.515-0.781-0.771-1.294-0.569c-0.515,0.199-0.77,0.779-0.57,1.294
 l0.484,1.244c-4.174,1.887-7.495,5.325-9.225,9.672C2.112,32.883,2,31.454,2,30c0-5.098,1.376-9.878,3.767-14
 c0.048,0.138,0.116,0.269,0.225,0.377l1.958,1.957c0.349,0.35,0.899,0.392,1.298,0.1l1.236-0.906
 c0.557-0.408,1.243-0.498,1.886-0.245c0.642,0.252,1.085,0.785,1.216,1.464l0.278,1.443C13.955,20.66,14.367,21,14.846,21h2.769
 c0.494,0,0.913-0.36,0.988-0.848l0.164-1.065c0.105-0.688,0.552-1.256,1.194-1.521c0.642-0.269,1.36-0.18,1.921,0.231l0.869,0.637
 c0.398,0.292,0.949,0.25,1.298-0.1l1.958-1.957c0.339-0.339,0.39-0.871,0.121-1.268l-0.825-1.218
 c-0.387-0.572-0.451-1.263-0.175-1.896c0.276-0.632,0.825-1.055,1.507-1.159l1.515-0.233C28.64,10.528,29,10.108,29,9.615v-2.77
 c0-0.479-0.34-0.892-0.812-0.982l-1.443-0.277c-0.678-0.13-1.211-0.573-1.463-1.216c-0.252-0.642-0.163-1.33,0.244-1.885
 l0.105-0.142C27.055,2.119,28.514,2,30,2c2.876,0,5.651,0.437,8.265,1.246c-1.25,0.565-2.402,1.3-3.419,2.185l-0.745-0.745
 c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.752,0.752c-1.938,2.24-3.173,5.079-3.395,8.147H29c-0.552,0-1,0.447-1,1
 s0.448,1,1,1h1.051c0.221,3.108,1.455,5.934,3.381,8.154l-0.745,0.745c-0.391,0.391-0.391,1.023,0,1.414
 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l0.745-0.745c2.22,1.926,5.047,3.16,8.154,3.381V31
 c0,0.553,0.448,1,1,1s1-0.447,1-1v-1.044c3.068-0.222,5.907-1.457,8.147-3.395l0.752,0.752c0.195,0.195,0.451,0.293,0.707,0.293
 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-0.745-0.745c0.885-1.017,1.62-2.169,2.186-3.419
 C57.563,24.349,58,27.124,58,30c0,0.258-0.013,0.513-0.02,0.77C57.873,30.325,57.484,30,57.019,30h-3.461
 c-0.479,0-0.892,0.34-0.982,0.812l-0.448,2.331c-0.176,0.912-0.769,1.64-1.627,1.995c-0.857,0.355-1.792,0.262-2.561-0.261
 l-1.965-1.332c-0.396-0.269-0.929-0.217-1.268,0.121l-2.447,2.448c-0.349,0.349-0.391,0.9-0.1,1.299l1.133,1.545
 c0.554,0.755,0.68,1.726,0.338,2.597s-1.095,1.497-2.014,1.674l-1.805,0.347C39.34,43.666,39,44.078,39,44.558v3.462
 c0,0.493,0.36,0.913,0.848,0.988l1.894,0.291c0.925,0.143,1.701,0.739,2.076,1.598c0.374,0.857,0.284,1.833-0.241,2.608
 l-1.025,1.513C38.773,56.921,34.511,58,30,58C28.546,58,27.117,57.888,25.722,57.673z"
              ></path>
            </g>
          </svg>
          <h1 className="lg:text-lg md:text-lg text-sm text-[#4d5660] group-hover:text-[#00a991]">
            Delete
          </h1>
        </div>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay z-50" />
        <AlertDialog.Content className="AlertDialogContent z-50">
          <AlertDialog.Title className="text-[#1b1524] font-bold mb-3">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="text-gray-500/100 mb-4">
            This action cannot be undone. This will permanently delete your
            website and remove your data from our servers.
          </AlertDialog.Description>
          <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
            <AlertDialog.Cancel asChild>
              <button className="bg-gray-200/70 text-gray-700/70 font-semibold px-3 py-1 border-2 border-solid border-gray-600/20 rounded-md">
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                onClick={handleDeleteWebsite}
                className="text-red-500 font-semibold bg-red-200/70 py-1 px-3 rounded-md"
              >
                Yes, delete website
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default DeleteWebsite;
