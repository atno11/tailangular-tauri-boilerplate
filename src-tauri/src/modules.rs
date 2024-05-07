// pub use crate::modules::handlers::window_handler;
pub mod handlers {
  pub mod window_handler;
}
pub use crate::modules::handlers::window_handler::{__cmd__handle_window, handle_window};
